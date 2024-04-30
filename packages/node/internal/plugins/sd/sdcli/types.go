package sdcli

import (
	"encoding/json"
	"fmt"
)

type Text2imgapiSdapiV1Txt2imgPostResponse struct {
	Images     []string   `json:"images"`
	Parameters Parameters `json:"parameters"`
	Info       string     `json:"info"`
}

type Parameters struct {
	Prompt                            string        `json:"prompt"`
	NegativePrompt                    string        `json:"negative_prompt"`
	Styles                            interface{}   `json:"styles"`
	Seed                              int           `json:"seed"`
	Subseed                           int           `json:"subseed"`
	SubseedStrength                   float64       `json:"subseed_strength"`
	SeedResizeFromH                   int           `json:"seed_resize_from_h"`
	SeedResizeFromW                   int           `json:"seed_resize_from_w"`
	SamplerName                       interface{}   `json:"sampler_name"`
	BatchSize                         int           `json:"batch_size"`
	NIter                             int           `json:"n_iter"`
	Steps                             int           `json:"steps"`
	CfgScale                          float64       `json:"cfg_scale"`
	Width                             int           `json:"width"`
	Height                            int           `json:"height"`
	RestoreFaces                      interface{}   `json:"restore_faces"`
	Tiling                            interface{}   `json:"tiling"`
	DoNotSaveSamples                  bool          `json:"do_not_save_samples"`
	DoNotSaveGrid                     bool          `json:"do_not_save_grid"`
	Eta                               interface{}   `json:"eta"`
	DenoisingStrength                 interface{}   `json:"denoising_strength"`
	SMinUncond                        interface{}   `json:"s_min_uncond"`
	SChurn                            interface{}   `json:"s_churn"`
	STmax                             interface{}   `json:"s_tmax"`
	STmin                             interface{}   `json:"s_tmin"`
	SNoise                            interface{}   `json:"s_noise"`
	OverrideSettings                  interface{}   `json:"override_settings"`
	OverrideSettingsRestoreAfterwards bool          `json:"override_settings_restore_afterwards"`
	RefinerCheckpoint                 interface{}   `json:"refiner_checkpoint"`
	RefinerSwitchAt                   interface{}   `json:"refiner_switch_at"`
	DisableExtraNetworks              bool          `json:"disable_extra_networks"`
	Comments                          interface{}   `json:"comments"`
	EnableHr                          bool          `json:"enable_hr"`
	FirstphaseWidth                   int           `json:"firstphase_width"`
	FirstphaseHeight                  int           `json:"firstphase_height"`
	HrScale                           float64       `json:"hr_scale"`
	HrUpscaler                        interface{}   `json:"hr_upscaler"`
	HrSecondPassSteps                 int           `json:"hr_second_pass_steps"`
	HrResizeX                         int           `json:"hr_resize_x"`
	HrResizeY                         int           `json:"hr_resize_y"`
	HrCheckpointName                  interface{}   `json:"hr_checkpoint_name"`
	HrSamplerName                     interface{}   `json:"hr_sampler_name"`
	HrPrompt                          string        `json:"hr_prompt"`
	HrNegativePrompt                  string        `json:"hr_negative_prompt"`
	SamplerIndex                      string        `json:"sampler_index"`
	ScriptName                        interface{}   `json:"script_name"`
	ScriptArgs                        []interface{} `json:"script_args"`
	SendImages                        bool          `json:"send_images"`
	SaveImages                        bool          `json:"save_images"`
	AlwaysonScripts                   interface{}   `json:"alwayson_scripts"`
}

type SystemInfo struct {
	Platform      string   `json:"Platform"`
	Python        string   `json:"Python"`
	Version       string   `json:"Version"`
	Commit        string   `json:"Commit"`
	ScriptPath    string   `json:"Script path"`
	DataPath      string   `json:"Data path"`
	ExtensionsDir string   `json:"Extensions dir"`
	Checksum      string   `json:"Checksum"`
	Commandline   []string `json:"Commandline"`
	TorchEnvInfo  TorchEnv `json:"Torch env info"`
	CPU           CPUInfo  `json:"CPU"`
	RAM           RAMInfo  `json:"RAM"`
	// Add other fields as necessary
}

type TorchEnv struct {
	TorchVersion        string          `json:"torch_version"`
	IsDebugBuild        string          `json:"is_debug_build"`
	CudaCompiledVersion string          `json:"cuda_compiled_version"`
	GCCVersion          string          `json:"gcc_version"`
	ClangVersion        string          `json:"clang_version"`
	CmakeVersion        string          `json:"cmake_version"`
	OS                  string          `json:"os"`
	LibcVersion         string          `json:"libc_version"`
	PythonVersion       string          `json:"python_version"`
	PythonPlatform      string          `json:"python_platform"`
	IsCudaAvailable     string          `json:"is_cuda_available"`
	CudaRuntimeVersion  string          `json:"cuda_runtime_version"`
	CudaModuleLoading   string          `json:"cuda_module_loading"`
	NvidiaDriverVersion string          `json:"nvidia_driver_version"`
	NvidiaGPUModels     NvidiaGPUModels `json:"nvidia_gpu_models"`
	CudnnVersion        string          `json:"cudnn_version"`
	PipVersion          string          `json:"pip_version"`
	PipPackages         []string        `json:"pip_packages"`
	CondaPackages       []string        `json:"conda_packages"`
	CPUInfo             []string        `json:"cpu_info"`
	// Add other fields as necessary
}

// NvidiaGPUModels is a custom type that can hold either a single model or multiple models.
type NvidiaGPUModels []string

// UnmarshalJSON implements the unmarshaling logic for NvidiaGPUModels to handle both a single string and an array of strings.
func (m *NvidiaGPUModels) UnmarshalJSON(data []byte) error {
	// First, try to unmarshal as an array of strings.
	var models []string
	if err := json.Unmarshal(data, &models); err == nil {
		*m = models
		return nil
	}

	// If the first attempt fails, try to unmarshal as a single string and wrap it in a slice.
	var singleModel string
	if err := json.Unmarshal(data, &singleModel); err == nil {
		*m = []string{singleModel}
		return nil
	}

	// If both attempts fail, return an error indicating the data did not match either expected format.
	return fmt.Errorf("nvidia_gpu_models must be either a string or an array of strings")
}

type CPUInfo struct {
	Model         string `json:"model"`
	CountLogical  int    `json:"count logical"`
	CountPhysical int    `json:"count physical"`
}

type RAMInfo struct {
	Total    string `json:"total"`
	Used     string `json:"used"`
	Free     string `json:"free"`
	Active   string `json:"active"`
	Inactive string `json:"inactive"`
	Buffers  string `json:"buffers"`
	Cached   string `json:"cached"`
	Shared   string `json:"shared"`
}

type EstimationData struct {
	Msg                           string      `json:"msg"`
	Rank                          interface{} `json:"rank"` // Can be null or another type
	QueueSize                     int         `json:"queue_size"`
	AvgEventProcessTime           float64     `json:"avg_event_process_time"`
	AvgEventConcurrentProcessTime float64     `json:"avg_event_concurrent_process_time"`
	RankEta                       interface{} `json:"rank_eta"` // Can be null or another type
	QueueEta                      int         `json:"queue_eta"`
}
